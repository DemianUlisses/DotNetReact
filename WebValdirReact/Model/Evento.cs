using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebValdirReact.Model
{
    [Table("Evento")]
    public class Evento
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Descricao")]
        public string Descricao { get; set; }

        [Column("nome")]
        [DataType(DataType.Date)]
        public DateTime nome { get; set; }

        [Column("QtdQua")]
        public int quantidade { get; set; }


    }
}
