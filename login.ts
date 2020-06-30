class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    userInput: HTMLInputElement;
    passInput: HTMLInputElement;

    constructor() { //gets access to template and form
        this.templateElement = <HTMLTemplateElement> document.getElementById('project')!;
        this.hostElement = <HTMLDivElement> document.getElementById('app')! ;  //holds a reference to the element where I want to render my template content

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = <HTMLFormElement> importedNode.firstElementChild;

        this.userInput = <HTMLInputElement> this.element.querySelector('#user');
        this.passInput = <HTMLInputElement> this.element.querySelector('#pass');


        this.configure();
        this.attach();
    }

    private submitHandler(event: Event) {
        event.preventDefault();
        console.log(this.userInput.value);
    }

    private configure() {
        this.element.addEventListener('Check', this.submitHandler.bind(this));
    }

    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const test = new ProjectInput();