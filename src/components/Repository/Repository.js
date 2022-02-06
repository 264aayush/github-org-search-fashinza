let Repository = (props) => {
    return <div className="card mx-auto my-5" style={{width:"min(100%,600px)",boxShadow:"0px 0px 10px black", height:"400px",overflow:"auto",cursor:"pointer"}}>
        <div className="card-body">
            {JSON.stringify(props.repo)}
        </div>
    </div>

}
export default Repository;
