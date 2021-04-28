using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebValdirReact.Model
{
    [Table("Usuario")]
    public class Usuario
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Nome")]
        public string Descricao { get; set; }

        [Column("Email")]
        public string Email { get; set; }

        [Column("Sexo")]
        public string Sexo { get; set; }

    }
}
