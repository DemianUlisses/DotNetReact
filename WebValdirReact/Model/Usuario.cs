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

        [Column("Descricao")]
        [StringLength(60, MinimumLength = 3, ErrorMessage = "O título deve ter entre 3 e 60 caracteres!")]
        [Required(ErrorMessage = "Obrigatório informar o Nome!")]
        public string Descricao { get; set; }

        [Column("Email")]
        [Required(ErrorMessage = "Obrigatório informar o Email!")]
        public string Email { get; set; }

        [Column("Sexo")]
        [RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$", ErrorMessage = "Caracteres inválidos!")]
        [Required(ErrorMessage = "Obrigatório informar o gênero!")]
        public string Sexo { get; set; }

        [Column("TipoUsuarioID")]
        [Required(ErrorMessage = "Obrigatório informar o Tipo do Usuario!")]
        public int TipoUsuarioID { get; set; }

        [Range(1, 100, ErrorMessage = "Obrigado Informar o Tipo Usuario")]
        public TipoUsuario TipoUsuario { get; set; }

    }
}
