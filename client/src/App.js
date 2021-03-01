import logo from './logo.svg';
import './App.css';
import * as Tone from "tone";
import { render } from 'react-dom';



function App() {

  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();
  const Cnote = () => synth.triggerAttackRelease("C4", "1hz");
  const Dnote = () => synth.triggerAttackRelease("D4","1hz");
  const Enote = () => synth.triggerAttackRelease("E4","1hz");
  const Fnote = () => synth.triggerAttackRelease("F4","1hz");
  const Gnote = () => synth.triggerAttackRelease("G4","1hz");
  const Anote = () => synth.triggerAttackRelease("A4","1hz");
  const Bnote = () => synth.triggerAttackRelease("B4","1hz");
  const Csharpnote = () => synth.triggerAttackRelease("C#4","1hz");
  const Dsharpnote = () => synth.triggerAttackRelease("D#4","1hz");
  const Gsharpnote = () => synth.triggerAttackRelease("G#4","1hz");
  const Fsharpnote = () => synth.triggerAttackRelease("F#4","1hz");
  const Asharpnote = () => synth.triggerAttackRelease("A#4","1hz");

  
  return (
    <div className="App">
      <header className="App-header">
      <div class="blackkeys" Style="margin-left:50px" onClick={Cnote}>C <div class="whitekeys" onClick={Csharpnote}>C#</div></div>
      <div class="blackkeys" onClick={Dnote}>D <div class="whitekeys" onClick={Dsharpnote}>D# </div></div>
      <div class="blackkeys" onClick={Enote}>E <div Style="position:relative;margin-top:-271px;
margin-left:23px;"></div></div>
      <div class="blackkeys" onClick={Fnote}>F <div class="whitekeys" onClick={Fsharpnote}>F#</div></div>
      <div class="blackkeys" onClick={Gnote}>G <div class="whitekeys" onClick={Gsharpnote}>G#</div></div>
      <div class="blackkeys" onClick={Anote}>A <div class="whitekeys" onClick={Asharpnote}>A#</div></div>
      <div class="blackkeys" onClick={Bnote}>B <div Style="position:relative;margin-top:-271px;
margin-left:23px;"></div></div>
      </header>
    </div>
  );
}

export default App;
