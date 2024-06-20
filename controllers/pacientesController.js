const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query("select *from pacientes", (err, pacientes) => {
      if (err) {
        res.json(err);
      }
      res.json(pacientes);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into pacientes set?", [data], (err, pacientes) => {
      res.json(pacientes);
    });
  });
};

controller.edit = (req, res) => {
  const { cod_paciente } = req.params;

  req.getConnection((err, conn) => {
    conn.query(
      "select *from pacientes where cod_paciente=?",
      [cod_paciente],
      (err, pacientes) => {
        res.json(pacientes[0]);
      }
    );
  });
};

controller.update = (req, res) => {
  const { cod_paciente } = req.params;
  const nuevo_pacientes = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update pacientes set ? where cod_paciente =?",
      [nuevo_pacientes, cod_paciente],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { cod_paciente } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      'update pacientes set estado="Inactivo" from pacientes where cod_paciente =?',
      [cod_paciente],
      (err, rows) => {
        res.json({ message: "Registro Eliminado" });
      }
    );
  });
};

module.exports = controller;
