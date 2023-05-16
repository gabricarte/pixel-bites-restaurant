
export function inputValidator(inputValue) {

    const maxLength = 12;

    if (inputValue.length > maxLength) {
      return {
        isValid: false,
        message: `Atenção! É necessário que a resposta tenha menos que ${maxLength + 1} caracteres`,
        length: inputValue.length,
      };
    } else if (inputValue.length == 0){
        return {
        isValid: false,
        message: `Ops... Parece que você esqueceu de responder`,
        length: inputValue.length,
        }  
    }

    return {
      isValid: true,
      message: '',
      length: inputValue.length,
    };
}