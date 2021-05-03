using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebValdirReact.Model;

namespace WebValdirReact.Configuracao
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Produto> Produto { get; set; }

        public DbSet<WebValdirReact.Model.Usuario> Usuario { get; set; }

        public DbSet<WebValdirReact.Model.TipoUsuario> TipoUsuario { get; set; }
        

    }
}
