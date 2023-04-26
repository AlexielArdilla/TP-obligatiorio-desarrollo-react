function Registro() {
  return (
    <div>
      <h1>Registrarse</h1>
      <form>
        <label>Nombre Completo</label><br />
        <input required /><br />
        <label >Nombre de Usuario</label><br />
        <input required /><br />
        <label>Email</label><br />
        <input type="email" required /><br />
        <label>Password</label><br />
        <input type="password" required /><br />
        <label>Confirmar password</label><br />
        <input type="password" required /><br />
        <br />
        <button>Enviar</button>
      </form>
    </div>
  );

}

export default Registro;
