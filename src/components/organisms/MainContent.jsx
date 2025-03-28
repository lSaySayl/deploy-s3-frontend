import "../../styles/MainContent.css";
import Card from "../molecules/Card";

function MainContent() {
    return (
        <main className="main-content">
            <Card title="AWS" content="Información de AWS" />
            <Card title="Devops" content="Información de Devops" />
            <Card title="Lambdas" content="Información de Lambdas" />
            <Card title="Node" content="Información de Lambdas" />
        </main>
    );
}

export default MainContent;
