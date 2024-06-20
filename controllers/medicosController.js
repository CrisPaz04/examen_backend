const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query("select *from medicos", (err, medicos) => {
      if (err) {
        res.json(err);
      }
      res.json(medicos);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into medicos set?", [data], (err, medicos) => {
      res.json(medicos);
    });
  });
};

controller.edit = (req, res) => {
  const { cod_doctor } = req.params;

  req.getConnection((err, conn) => {
    conn.query(
      "select *from medicos where cod_doctor=?",
      [cod_doctor],
      (err, medicos) => {
        res.json(medicos[0]);
      }
    );
  });
};

controller.update = (req, res) => {
  const { cod_doctor } = req.params;
  const nuevo_medicos = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update medicos set ? where cod_doctor =?",
      [nuevo_medicos, cod_doctor],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { cod_doctor } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      'update medicos set estado="Inactivo" from medicos where cod_doctor =?',
      [cod_doctor],
      (err, rows) => {
        res.json({ message: "Registro Eliminado" });
      }
    );
  });
};

module.exports = controller;
