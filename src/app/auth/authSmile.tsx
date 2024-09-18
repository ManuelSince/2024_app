export const AuthSmile = function () {
  return (
    <main className="body">
      <div className="bcrumbs">
        <div className="container">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>Login</li>
          </ul>
        </div>
      </div>
      <div className="space10"></div>

      <div className="account-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div id="account-id">
                <h4 className="account-title">
                  <span className="fa fa-chevron-right"></span>Se connecter
                </h4>
                <div className="account-form">
                  {/* session.isLogged && 
                          <div className="alert alert-danger" role="alert">
                          Adresse e-mail ou mot de passe invalide
                          </div>
                        */}
                  <form className="form-login" method="POST">
                    <ul className="form-list row">
                      <li className="col-md-12 col-sm-12">
                        <label>
                          email <em>*</em>
                        </label>
                        <input
                          required
                          type="text"
                          className="input-text"
                          name="email"
                        />
                      </li>
                      <li className="col-md-12 col-sm-12">
                        <label>
                          Your password <em>*</em>
                        </label>
                        <input
                          required
                          type="password"
                          className="input-text"
                          name="password"
                        />
                      </li>
                      <li className="col-md-6 col-sm-12">
                        <input className="input-chkbox" type="checkbox" />
                        <label>Remember me</label>
                      </li>
                      <li className="col-md-6 col-sm-12 pwd text-right">
                        <label>
                          {" "}
                          <a href="#"> forgot password? </a>{" "}
                        </label>
                      </li>
                    </ul>
                    <div className="buttons-set">
                      <button
                        className="btn-black"
                        type="submit"
                        name="connection"
                      >
                        <span>Connection</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div id="account-id2">
                <h4 className="account-title">
                  <span className="fa fa-chevron-right"></span>Creation de
                  compte
                </h4>
                <div className="account-form create-new-account">
                  <form className="form-login" method="POST">
                    <ul className="form-list row">
                      <li className="col-md-12 col-sm-12">
                        <label>
                          Nom & Prenom <em>*</em>
                        </label>
                        <input
                          required
                          type="text"
                          className="input-text"
                          name="name"
                        />
                      </li>
                      <li className="col-md-12 col-sm-12">
                        <label>
                          email <em>*</em>
                        </label>
                        <input
                          required
                          type="text"
                          className="input-text"
                          name="email"
                        />
                      </li>
                      <li className="col-md-12 col-sm-12">
                        <label>
                          Your password <em>*</em>
                        </label>
                        <input
                          required
                          type="password"
                          className="input-text"
                          name="password"
                        />
                      </li>
                      <li className="col-md-6 col-sm-12">
                        <input className="input-chkbox" type="checkbox" />
                        <label>Remember me</label>
                      </li>
                      <li className="col-md-6 col-sm-12 pwd text-right">
                        <label>
                          {" "}
                          <a href="#"> forgot password? </a>{" "}
                        </label>
                      </li>
                    </ul>
                    <div className="buttons-set">
                      <button
                        className="btn-black"
                        type="submit"
                        name="inscription"
                      >
                        <span>Inscription</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
