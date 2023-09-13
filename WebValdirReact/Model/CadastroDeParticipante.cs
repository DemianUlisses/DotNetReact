using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebValdirReact.Model
{
    [Table("Participante")]
    public class CadastroDeParticipante
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("UsuarioID")]
        [Required(ErrorMessage = "Obrigatório informar o Tipo do Usuario!")]
        public int UsuarioID { get; set; }

        [Range(1, 100, ErrorMessage = "Obrigado Informar o Tipo Usuario")]

        public IList<Usuario> Usuarios { get; set; } 
        [Column("EventoID")]
        [Required(ErrorMessage = "Obrigatório informar o Evento!")]
        public int EventoID { get; set; }

        [Range(1, 100, ErrorMessage = "Obrigado Informar o Evento ")]
        public IList<Evento> Eventos { get; set; } 

    }
}
