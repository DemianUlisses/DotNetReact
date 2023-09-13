using System.ComponentModel.DataAnnotations.Schema;

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
