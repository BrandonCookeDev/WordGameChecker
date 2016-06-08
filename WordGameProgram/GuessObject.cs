using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WordGameProgram
{
    public class GuessObject
    {
        private string word;

        public string Word
        {
            get { return word; }
            set { word = value; }
        }
        private string letters;

        public string Letters
        {
            get { return letters; }
            set { letters = value; }
        }
        private string positions;

        public string Positions
        {
            get { return positions; }
            set { positions = value; }
        }

        public GuessObject(string word, string letters, string positions)
        {
            this.word = word;
            this.letters = letters;
            this.positions = positions;
        }
    }
}
