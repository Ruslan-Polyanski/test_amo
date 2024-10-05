const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIzZjE4ZWEyMjVkMDAyN2FhYTRkNjY0NTUwNWI4NDRjYjg5NzdlMTMyNzE4MTY5NWRkMjZlNDIyNzg0YmM1ZDQxZGRlZjgxNTFiNGRiOTQxIn0.eyJhdWQiOiI1NDVlYjYxNi1jMmMyLTQzYTEtYTdhNi0wODU0YmNlYzNmOGEiLCJqdGkiOiIyM2YxOGVhMjI1ZDAwMjdhYWE0ZDY2NDU1MDViODQ0Y2I4OTc3ZTEzMjcxODE2OTVkZDI2ZTQyMjc4NGJjNWQ0MWRkZWY4MTUxYjRkYjk0MSIsImlhdCI6MTcyNzYwNTkxNCwibmJmIjoxNzI3NjA1OTE0LCJleHAiOjE3MzU2MDMyMDAsInN1YiI6IjExNTgxMTI2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTc4ODc4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNWQ3YjBmOTItYjQ0Ny00MGM0LTliMmQtZjA2ZWY4ZjE1OTM1IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.oRSFQw5Wpwnng1JmuJJ1N6WM6uSTiq2qaLq2YHsuqtZgoGfBccc4nBRJ2eaQd92rha6MI2eqRoBl-tPSZAzFYhcV7doIcIwRXuICBPdfhasOwc90hZvi3bSey_td3oftMYrsOIN6h9NBFIJJxMQ3fO3JHWxU-42RV7LzUMG8vy-TOZzuMbCIDrDZbukZpEx6GXd2i635j8L4dlGtwpEa0gHRnTOpSDtOQysSfd8owIt12ZNCzPs-E7pN5eTR4u3WIosaiVPBddFu_40DVI-GlQAavkSFPBoP1WFxQYjR7a5uGT3KLuE19vALl_t4jAhKiR7lTn3sZ6vnSPv-rfxutA';
const URL = 'https://ruslapolyanski.amocrm.ru/api/v4/';

const api = {
  async getAllLeads(page = 1, limit = 250) {
    let response = await fetch(`${URL}leads?limit=${limit}&page=${page}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${access_token}`,
        accept:"application/json"
     }
    });
  
    if (response.ok) { 
      let json = await response.json();
      return json;
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  },
  
  async getCardLead(id) {
    let response = await fetch(`${URL}leads/${id}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${access_token}`,
        accept:"application/json"
     }
    });

    if (response.ok) { 
      let json = await response.json();
      return json;
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
}

export { api }
