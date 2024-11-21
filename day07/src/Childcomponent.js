export default function Childcomponent(props){
    return(
        <>
            <h3>Hello React I'm Child</h3>
            {
                props.setfun("My Name is Bob")
            }
        </>
    );
}