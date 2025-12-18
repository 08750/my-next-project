"use server";
function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(_prevState: any, formDate: FormData) {
  const rawFormdata = {
    lastname: formDate.get("lastname") as string,
    firstname: formDate.get("firstname") as string,
    company: formDate.get("company") as string,
    email: formDate.get("email") as string,
    message: formDate.get("message") as string,
  };

  if (!rawFormdata.lastname) {
    return {
      status: "error",
      message: "性を入力してください",
    };
  }
  if (!rawFormdata.firstname) {
    return {
      status: "error",
      message: "名を入力してください",
    };
  }
  if (!rawFormdata.company) {
    return {
      status: "error",
      message: "会社名を入力してください",
    };
  }
  if (!rawFormdata.email) {
    return {
      status: "error",
      message: "メールアドレスを入力してください",
    };
  }
  if (!validateEmail(rawFormdata.email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が間違っています。",
    };
  }
  if (!rawFormdata.message) {
    return {
      status: "error",
      message: "メッセージを入力してください",
    };
  }
  return {
    status: "success",
    message: "OK",
  };
}
