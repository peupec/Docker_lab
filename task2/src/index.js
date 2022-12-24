const { initDB } = require("./database/config");
const Student = require("./database/models/student.model");

async function bootstrap() {
  await initDB();
  const studentLisr = await Student.findAll({
    order: [["dateBirth", "ASC"]],
  });

  console.log(studentLisr);
}

bootstrap();
