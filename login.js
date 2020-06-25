var ProjectInput = (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById('project-input');
        !as;
        HTMLTemplateElement;
        this.hostElement = document.getElementById('app');
        !as;
        HTMLDivElement; //holds a reference to the element where I want to render my template content
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        as;
        HTMLFormElement;
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    };
    return ProjectInput;
})();
var test = new ProjectInput();
