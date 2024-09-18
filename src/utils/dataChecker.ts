type FormData = Record<string, string>;
type FormModel = Record<string, string>;
export const signDataChecker = function (formData: FormData, model: FormModel) {
  for (const key in formData) {
    new RegExp(model[key]!, "g").test(formData[key]!);
  }
};

const str = "table football";

const regex = new RegExp("foo*");
const globalRegex = new RegExp("foo*", "g");

console.log(regex.test(str));
