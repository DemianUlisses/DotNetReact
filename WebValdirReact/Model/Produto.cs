﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebValdirReact.Model
{
    [Table("Produto")]
    public class Produto
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Descricao")]
        public string Descricao { get; set; }
      
        [Column("QtdePar")]
        public int QtdePar { get; set; }

        [Column("Situacao")]
        public int Situacao { get; set; }

    }
}
