class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor() { //gets access to template and form
        this.templateElement = <HTMLTemplateElement> document.getElementById('project-input')!;
        this.hostElement = <HTMLDivElement> document.getElementById('app')! ;  //holds a reference to the element where I want to render my template content

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = <HTMLFormElement> importedNode.firstElementChild ;
        this.attach();
    }

    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const test = new ProjectInput();