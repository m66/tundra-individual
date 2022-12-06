let required = (val) => (val ? null : "The field is required");

const nameVlaidation = (input) => {
    const regex = /^[A-Z]+\s[A-Z]+$/

    return regex.test(input) ? undefined : 'Write a correct name!';
}


const cardNumberValidation = (input) => {
  const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

  return regex.test(input) ? undefined : 'Write a correct card number!';
}

const expirationDateValidation = (input) => {
  const regex = /^((0[1-9])|(1[0-2]))[\/\.\-]*((0[8-9])|(1[1-9]))$/;

  return regex.test(input) ? undefined : 'Write a correct card number!';
}

const cvcValidation = (input) => {
  const regex = /^[0-9]{3,4}$/;

  return regex.test(input) ? undefined : 'Write a correct card number!';
}

// const constCountCharVlaidation = (length) => (input) => {
//     return input.length === length ? undefined : `Character count need to be ${length}!`;
// }

const mailValidation = (input) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return regex.test(String(input).toLocaleLowerCase()) ? undefined : 'Must be a mail!';
}

let maxLength = (length) => (val) =>
  val.length > length ? `Input can contain maximum ${length} charackters.` : null;

let minLength = (length) => (val) =>
  val.length < length ? `Input can contain minimum ${length} charackters.` : null;

let createValidation = (validations) => (val) => {
  for (let validation of validations) {
    
    const error = validation(val);
    if (error) {
      return error;
    }
  }

  return "";
};

export const validations = {
    name: createValidation([required, minLength(4), maxLength(36), nameVlaidation]),
    number: createValidation([required, cardNumberValidation]),
    date: createValidation([required, expirationDateValidation]),
    code: createValidation([required, cvcValidation]),
    address: createValidation([required, minLength(4), maxLength(36), nameVlaidation]),
    email: createValidation([required, mailValidation]),
}