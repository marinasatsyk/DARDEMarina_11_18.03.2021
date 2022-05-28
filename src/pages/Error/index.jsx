function Error({ codeError, data }) {
    return (
        <div>
            <h2>{codeError}</h2>
            {codeError === '404' && (
                <p>Oups! La page que vous avez demandé n'existe pas.</p>
            )}
            {codeError === '200' && <p>C'est quoi ce code ?</p>}
        </div>
    );
}

export default Error;
