
function DashboardDirectorio({ user }) {
  return (
    <div>
      <h1>Buen día, {user.nombre}</h1>
      <h2>Panel del Directorio</h2>
      <ul>
        <li><button>Administración</button></li>
        <li><button>Comercial</button></li>
        <li><button>Cajas</button></li>
        <li><button>Reportes</button></li>
      </ul>
    </div>
  );
}

export default DashboardDirectorio;
