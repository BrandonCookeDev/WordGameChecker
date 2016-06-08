using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WordGameProgram
{
    public partial class WordCheckerForm : Form
    {
        #region Local Variables
        private string version = "v0.1.0";
        private string solution;
        private bool flag;
        #endregion Local Variables

        #region GETTERS AND SETTERS
        public string Solution
        {
            get { return this.solution; }
            set { this.solution = value; }
        }
        public bool Flag
        {
            get { return this.flag; }
            set { this.flag = value; }
        }
        #endregion GETTERS AND SETTERS

        #region Load
        public WordCheckerForm()
        {
            InitializeComponent();
            guessTextBox.Enabled = false;
            guessTextBox.BackColor = Color.Gray;

            guessDataGrid.RowHeadersVisible = false;
            inputSolutionTextbox.Focus();

            authorLabel.Text = version + " | Brandon Cooke";

            guessTextBox.KeyUp         += guessTextbox_TextboxKeyUp;
            inputSolutionTextbox.KeyUp += inputSolutionTextbox_TextBoxKeyUp;
            ResetBtn.Click             += ResetBtn_Click;
        }

        private void WordCheckerForm_Load(object sender, EventArgs e)
        {
            
        }
        #endregion Load

        #region Button Listeners
        private void submitSolutionBtn_Click(object sender, EventArgs e)
        {
            if (!inputSolutionTextbox.Text.Equals("") && inputSolutionTextbox.Text != null)
            {
                if (isNullOrEmpty(Solution))
                    status("STORED", false);
                else status("OVERWRITTEN", false);

                Solution = inputSolutionTextbox.Text.ToLower();

                GuessObject go2 = new GuessObject(Solution.Count() + " LETTER WORD", null, null);
                addToListView(go2, false);

                inputSolutionTextbox.Text = "";
                inputSolutionTextbox.Enabled = false;
                inputSolutionTextbox.BackColor = Color.Gray;

                guessTextBox.Enabled = true;
                guessTextBox.BackColor = Color.White;

                guessTextBox.Focus();
            }
            else status("Solution Word Cannot be Blank", true);
        }

        

        private void submitGuessButton_Click(object sender, EventArgs e)
        {
            int numCorrect = 0;
            int numCorrectPos = 0;
            string guess = guessTextBox.Text.ToLower();
            if (!guess.Equals("") && guess != null)
            {
                guessTextBox.Text = "";
                if (guess.Count() != Solution.Count())
                {
                    string error = "GUESS MUST BE " + Solution.Count() + " LETTERS";
                    status(error, true);
                }
                else
                {
                    numCorrect = countNumberCorrect(Solution, guess);
                    numCorrectPos = countNumberCorrectPos(solution, guess);

                    //string result = guessTemp + "\t" + numCorrect + "\t" + numCorrectPos + "\r\n";
                    GuessObject go = new GuessObject(guess, numCorrect.ToString(), numCorrectPos.ToString());
                    addToListView(go, false);

                    string msg = "GUESS: " + guess;
                    status(msg, false);

                    if (guess.Equals(Solution))
                    {
                        var confirm = MessageBox.Show("YOU GOT IT! The word was: " + Solution + ". \n PLAY AGAIN?",
                                                       "Play again", MessageBoxButtons.YesNo);

                        switch (confirm)
                        {
                            case DialogResult.Yes:
                                clearForm();
                                break;
                            default:
                                this.Close();
                                break;
                        }
                    }
                }
            }
            else status("Guess Cannot be Blank", true);
        }

        private void ResetBtn_Click(object sender, EventArgs e)
        {
            clearForm();
        }
        #endregion Button Listeners

        #region ExtraMethods
        public void clearForm()
        {
            guessDataGrid.Rows.Clear();
            guessDataGrid.Refresh();

            Solution = "";

            inputSolutionTextbox.Enabled = true;
            inputSolutionTextbox.BackColor = Color.White;

            guessTextBox.Enabled = false;
            guessTextBox.BackColor = Color.Gray;

            status("", false);

            inputSolutionTextbox.Focus();            
        }

        public void status(string msg, bool err)
        {
            storedStatusLabel.Text = msg;
            if (err)
                storedStatusLabel.ForeColor = Color.HotPink;
            else storedStatusLabel.ForeColor = Color.White;

            storedStatusLabel.Font = new Font(storedStatusLabel.Font, FontStyle.Bold);
        }

        public bool isNullOrEmpty(string s)
        {
            return s == null || s.Equals("");
        }

        public void addToListView(GuessObject o, bool err)
        {
            var row = (DataGridViewRow)guessDataGrid.Rows[0].Clone();
            guessDataGrid.Rows.Add(o.Word, o.Letters, o.Positions);
            if(err)
               row.Cells[0].Style.ForeColor = Color.Red;
        }

        public static int countNumberCorrect(string solution, string guess)
        {
            int sum = 0;

            Queue<Char> guessQ = new Queue<Char>(guess.ToArray());
            Dictionary<Char, Int32> map = new Dictionary<Char, Int32>();

            for (int i = 0; i < solution.Length; i++)
            {
                char c = solution[i];
                if (map.ContainsKey(c))
                    map[c] += 1;
                else
                    map.Add(c, 1);

            }

            for (int i = 0; i < guess.Length; i++)
            {
                char c = guessQ.Dequeue();
                if (map.ContainsKey(c) && map[c] > 0)
                {
                    map[c] -= 1;
                    sum++;
                }
            }
            return sum;
        }

        public static int countNumberCorrectPos(string solution, string guess)
        {
            int sum = 0;

            for (int i = 0; i < solution.Length; i++)
            {
                if (solution[i] == guess[i])
                {
                    sum++;
                }
            }
            return sum;
        }
        #endregion ExtraMethods

        #region Key Listeners
        private void inputSolutionTextbox_TextBoxKeyUp(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
            {
                submitSolutionBtn_Click(sender, e);
                e.Handled = true;
            }
        }

        private void guessTextbox_TextboxKeyUp(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
            {
                submitGuessButton_Click(sender, e);
                e.Handled = true;
            }
        }
        #endregion Key Listeners
    }
}
