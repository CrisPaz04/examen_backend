const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query("select *from visitas", (err, visitas) => {
      if (err) {
        res.json(err);
      }
      res.json(visitas);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into visitas set?", [data], (err, visitas) => {
      res.json(visitas);
    });
  });
};

controller.edit = (req, res) => {
  const { num_visita } = req.params;

  req.getConnection((err, conn) => {
    conn.query(
      "select *from visitas where num_visita=?",
      [num_visita],
      (err, visitas) => {
        res.json(visitas[0]);
      }
    );
  });
};

controller.update = (req, res) => {
  const { num_visita } = req.params;
  const nuevo_visitas = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update visitas set ? where num_visita =?",
      [nuevo_visitas, num_visita],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { num_visita } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      'update visitas set estado="Inactivo" from visitas where num_visita =?',
      [num_visita],
      (err, rows) => {
        res.json({ message: "Registro Eliminado" });
      }
    );
  });
};

module.exports = controller;
