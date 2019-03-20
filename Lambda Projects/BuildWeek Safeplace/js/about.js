
// Step 3: Build out the Panel base class (clases are hoisted)
class Panel {
    constructor(panel) {
      this.panel = panel;
      this.panelButtons = this.panel.querySelector('.panel-buttons');
      this.panelBtnOpen = this.panel.querySelector('.panel-btn-open');
      this.panelBtnClose = this.panel.querySelector('.panel-btn-close');
      this.panelContent = this.panel.querySelector('.panel-content');

      // Explicit binding of this
      //this.panelButtons.addEventListener('click', this.togglePanel.bind(this));

      // this is NOT bound to the arrow and therefore looks up and finds the this keyword in the constructor
      this.panelButtons.addEventListener('click', () => this.togglePanel());
    }
    // methods
    togglePanel() {
      this.panelBtnOpen.classList.toggle('hide-btn');
      this.panelBtnClose.classList.toggle('hide-btn');
      this.panelContent.classList.toggle('toggle-on');
    }
  }

  // Step 1: Get the original DOM elements
  const panels = document.querySelectorAll('.panel');

  // Step 2: Return a newly constructed DOM element
  panels.forEach(function(panel){
    return new Panel(panel);
  });

