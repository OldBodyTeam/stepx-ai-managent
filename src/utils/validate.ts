const validateEmpty = (value?: string, cb?: any) => {
  if (!value) {
    return cb("用户名输入不能为空");
  }
  return cb();
};
const validateCompanyEmpty = (value?: string, cb?: any) => {
  if (!value) {
    return cb("公司名输入不能为空");
  }
  return cb();
};
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const validateEmail = (value?: string, cb?: any) => {
  if (!value) {
    return cb ? cb("邮箱不能为空") : "邮箱不能为空";
  }
  if (!emailPattern.test(value)) {
    return cb ? cb("邮箱格式不正确") : "邮箱格式不正确";
  }
  return cb ? cb() : "";
};
const passwordPattern =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
const validatePassword = (value?: string, cb?: any) => {
  if (!value) {
    return cb ? cb("密码不能为空") : "密码不能为空";
  }
  if (!passwordPattern.test(value)) {
    return cb ? cb("密码格式不正确") : "密码格式不正确";
  }
  return cb ? cb() : "";
};
export { validateEmpty, validateEmail, validatePassword, validateCompanyEmpty };
