
function Login(){

  return(
  <div>
      <h1>Login</h1>
      <form>
        <label>Usuario</label><br />
        <input required /><br />
        <label>Password</label><br />
        <input type="password" required /><br />
        <br />
        <button>Enviar</button>
      </form>
    </div>);
}

export default Login;
