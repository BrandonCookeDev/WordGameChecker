namespace WordGameProgram
{
    partial class WordCheckerForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(WordCheckerForm));
            this.inputSolutionLabel = new System.Windows.Forms.Label();
            this.inputSolutionTextbox = new System.Windows.Forms.TextBox();
            this.submitSolutionBtn = new System.Windows.Forms.Button();
            this.guessLabel = new System.Windows.Forms.Label();
            this.storedStatusLabel = new System.Windows.Forms.Label();
            this.guessTextBox = new System.Windows.Forms.TextBox();
            this.submitGuessButton = new System.Windows.Forms.Button();
            this.guessDataGrid = new System.Windows.Forms.DataGridView();
            this.ResetBtn = new System.Windows.Forms.Button();
            this.authorLabel = new System.Windows.Forms.Label();
            this.guessMsgColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.lettersColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.positionColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.guessDataGrid)).BeginInit();
            this.SuspendLayout();
            // 
            // inputSolutionLabel
            // 
            this.inputSolutionLabel.AutoSize = true;
            this.inputSolutionLabel.BackColor = System.Drawing.Color.Transparent;
            this.inputSolutionLabel.ForeColor = System.Drawing.SystemColors.Control;
            this.inputSolutionLabel.Location = new System.Drawing.Point(12, 7);
            this.inputSolutionLabel.Name = "inputSolutionLabel";
            this.inputSolutionLabel.Size = new System.Drawing.Size(101, 13);
            this.inputSolutionLabel.TabIndex = 0;
            this.inputSolutionLabel.Text = "Input Solution Word";
            // 
            // inputSolutionTextbox
            // 
            this.inputSolutionTextbox.Location = new System.Drawing.Point(12, 23);
            this.inputSolutionTextbox.Name = "inputSolutionTextbox";
            this.inputSolutionTextbox.Size = new System.Drawing.Size(149, 20);
            this.inputSolutionTextbox.TabIndex = 2;
            //this.inputSolutionTextbox.KeyUp += inputSolutionTextbox_TextBoxKeyUp;
            // 
            // submitSolutionBtn
            // 
            this.submitSolutionBtn.Location = new System.Drawing.Point(167, 20);
            this.submitSolutionBtn.Name = "submitSolutionBtn";
            this.submitSolutionBtn.Size = new System.Drawing.Size(114, 23);
            this.submitSolutionBtn.TabIndex = 3;
            this.submitSolutionBtn.Text = "Submit Solution";
            this.submitSolutionBtn.UseVisualStyleBackColor = true;
            this.submitSolutionBtn.Click += new System.EventHandler(this.submitSolutionBtn_Click);
            // 
            // guessLabel
            // 
            this.guessLabel.AutoSize = true;
            this.guessLabel.BackColor = System.Drawing.Color.Transparent;
            this.guessLabel.ForeColor = System.Drawing.SystemColors.Control;
            this.guessLabel.Location = new System.Drawing.Point(12, 69);
            this.guessLabel.Name = "guessLabel";
            this.guessLabel.Size = new System.Drawing.Size(69, 13);
            this.guessLabel.TabIndex = 6;
            this.guessLabel.Text = "Guess Word:";
            // 
            // storedStatusLabel
            // 
            this.storedStatusLabel.AutoSize = true;
            this.storedStatusLabel.BackColor = System.Drawing.Color.Transparent;
            this.storedStatusLabel.ForeColor = System.Drawing.SystemColors.Control;
            this.storedStatusLabel.Location = new System.Drawing.Point(21, 48);
            this.storedStatusLabel.Name = "storedStatusLabel";
            this.storedStatusLabel.Size = new System.Drawing.Size(0, 13);
            this.storedStatusLabel.TabIndex = 7;
            // 
            // guessTextBox
            // 
            this.guessTextBox.Location = new System.Drawing.Point(12, 85);
            this.guessTextBox.Name = "guessTextBox";
            this.guessTextBox.Size = new System.Drawing.Size(149, 20);
            this.guessTextBox.TabIndex = 8;
            
            // 
            // submitGuessButton
            // 
            this.submitGuessButton.Location = new System.Drawing.Point(167, 83);
            this.submitGuessButton.Name = "submitGuessButton";
            this.submitGuessButton.Size = new System.Drawing.Size(110, 23);
            this.submitGuessButton.TabIndex = 9;
            this.submitGuessButton.Text = "Submit Guess";
            this.submitGuessButton.UseVisualStyleBackColor = true;
            this.submitGuessButton.Click += new System.EventHandler(this.submitGuessButton_Click);
            // 
            // guessDataGrid
            // 
            this.guessDataGrid.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.guessDataGrid.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.guessMsgColumn,
            this.lettersColumn,
            this.positionColumn});
            this.guessDataGrid.Location = new System.Drawing.Point(12, 112);
            this.guessDataGrid.Name = "guessDataGrid";
            this.guessDataGrid.Size = new System.Drawing.Size(265, 282);
            this.guessDataGrid.TabIndex = 10;
            // 
            // ResetBtn
            // 
            this.ResetBtn.Location = new System.Drawing.Point(167, 401);
            this.ResetBtn.Name = "ResetBtn";
            this.ResetBtn.Size = new System.Drawing.Size(110, 23);
            this.ResetBtn.TabIndex = 11;
            this.ResetBtn.Text = "Reset";
            this.ResetBtn.UseVisualStyleBackColor = true;
            // 
            // authorLabel
            // 
            this.authorLabel.AutoSize = true;
            this.authorLabel.BackColor = System.Drawing.Color.Transparent;
            this.authorLabel.Location = new System.Drawing.Point(12, 405);
            this.authorLabel.Name = "authorLabel";
            this.authorLabel.Size = new System.Drawing.Size(0, 13);
            this.authorLabel.TabIndex = 12;
            // 
            // guessMsgColumn
            // 
            this.guessMsgColumn.HeaderText = "GUESS / MSG";
            this.guessMsgColumn.Name = "guessMsgColumn";
            this.guessMsgColumn.ReadOnly = true;
            this.guessMsgColumn.Width = 170;
            // 
            // lettersColumn
            // 
            this.lettersColumn.HeaderText = "#L";
            this.lettersColumn.Name = "lettersColumn";
            this.lettersColumn.ReadOnly = true;
            this.lettersColumn.Width = 50;
            // 
            // positionColumn
            // 
            this.positionColumn.HeaderText = "RP";
            this.positionColumn.Name = "positionColumn";
            this.positionColumn.ReadOnly = true;
            this.positionColumn.Width = 50;
            // 
            // WordCheckerForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.ClientSize = new System.Drawing.Size(290, 427);
            this.Controls.Add(this.authorLabel);
            this.Controls.Add(this.ResetBtn);
            this.Controls.Add(this.guessDataGrid);
            this.Controls.Add(this.submitGuessButton);
            this.Controls.Add(this.guessTextBox);
            this.Controls.Add(this.storedStatusLabel);
            this.Controls.Add(this.guessLabel);
            this.Controls.Add(this.submitSolutionBtn);
            this.Controls.Add(this.inputSolutionTextbox);
            this.Controls.Add(this.inputSolutionLabel);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "WordCheckerForm";
            this.Text = "Word Game GUI";
            this.Load += new System.EventHandler(this.WordCheckerForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.guessDataGrid)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label inputSolutionLabel;
        private System.Windows.Forms.TextBox inputSolutionTextbox;
        private System.Windows.Forms.Button submitSolutionBtn;
        private System.Windows.Forms.Label guessLabel;
        private System.Windows.Forms.Label storedStatusLabel;
        private System.Windows.Forms.TextBox guessTextBox;
        private System.Windows.Forms.Button submitGuessButton;
        private System.Windows.Forms.DataGridView guessDataGrid;
        private System.Windows.Forms.Button ResetBtn;
        private System.Windows.Forms.Label authorLabel;
        private System.Windows.Forms.DataGridViewTextBoxColumn guessMsgColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn lettersColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn positionColumn;
    }
}