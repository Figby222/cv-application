import CVForm from './utility-components/CVForm.jsx';

function Main() {
    return (
        <>
            <main>
               <dialog open={true}>
                    <CVForm />
                </dialog> 
            </main>
        </>
    )
}

export default Main;