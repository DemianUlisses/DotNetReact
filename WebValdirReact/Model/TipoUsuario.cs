using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebValdirReact.Model
{
    [Table("TipoUsuario")]
    public class TipoUsuario
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Nome")]
        [StringLength(60, MinimumLength = 3, ErrorMessage = "O título deve ter entre 3 e 60 caracteres!")]
        [Required(ErrorMessage = "Obrigatório informar o título!")]
        public string Descricao { get; set; }

      //  public ICollection<Usuario> Usuarios { get; set; }
    }
}
