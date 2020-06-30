var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById('project');
        this.hostElement = document.getElementById('app'); //holds a reference to the element where I want to render my template content
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.userInput = this.element.querySelector('#user');
        this.passInput = this.element.querySelector('#pass');
        this.configure();
        this.attach();
    }
    ProjectInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        console.log(this.userInput.value);
    };
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener('Check', this.submitHandler.bind(this));
    };
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    };
    return ProjectInput;
}());
var test = new ProjectInput();
