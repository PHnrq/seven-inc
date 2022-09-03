export const maskDocument = (document) => {
  if (document) {
    document = document.replace(/[^\d]/g, "");

    return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
};

export const maskPhone = (phone) => {
  if (phone) {
    let phoneNumber = phone.replace(/\D/g, "");
    phoneNumber = phoneNumber.replace(/^0/, "");

    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");

    return phoneNumber;
  }
};

export const maskSalary = (salary) => {
  if (salary) {
    const salaryFormat = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(salary);

    return salaryFormat;
  }
};

export const maskDate = (date) => {
  if (date) {
    const dateFormat = new Intl.DateTimeFormat("pt-BR").format(new Date(date));

    return dateFormat;
  }
};

export const formatEmployeeInfo = (employees) => {
  employees.forEach((employee) => {
    employee.document = maskDocument(employee.document);
    employee.phone = maskPhone(employee.phone);
    employee.birth_date = maskDate(employee.birth_date);
    employee.salary = maskSalary(employee.salary);
    employee.created_at = maskDate(employee.created_at);
  });
};
