function verificarSesion() {
	const usuarioLogado = localStorage.getItem("authToken");
	if (!usuarioLogado) {
		const url = `${window.location.origin}/auth/login.html`;
		window.location.href = url;
	}
}

verificarSesion();