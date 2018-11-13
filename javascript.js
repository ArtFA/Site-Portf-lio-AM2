function clicarEnviar() {
	if (email.value == '')
		alert("Preencha o campo de E-mail!");
	else if (assunto.value == '')
		alert("Preencha o campo de Assunto!");
	else if (mensagem.value == '')
		alert("Preencha o campo de Mensagem!");
	else{
		alert("E-mail enviado com sucesso!");
		email.value = '';
		assunto.value = '';
		mensagem.value = '';
	}
	
}


