let required = (val) => (val ? null : "The field is required");

const nameVlaidation = (input) => {
    const regex = /^[A-Z]+\s[A-Z]+$/

    return regex.test(input) ? undefined : 'Write a correct name!';
}

const cardNumberValidation = (input) => {
  const regex = /^[0-9]{16}$/;

  return regex.test(input) ? undefined : 'Write a correct card number!';
}

const expirationDateValidation = (input) => {
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

  return regex.test(input) ? undefined : 'Write a correct card number!';
}

const cvcValidation = (input) => {
  const regex = /^[0-9]{3,4}$/;

  return regex.test(input) ? undefined : 'Write a correct card number!';
}

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