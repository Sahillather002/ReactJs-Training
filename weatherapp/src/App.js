import './App.css';
import {TextField,Avatar,Card,CardContent,Grid} from '@mui/material';

function App() {

  return (
    <div className='wrapper'>
      <Card
        sx={{
            width:600,
            backgroundColor:"#00000099",
            color:"#80ff00",
            border:4,
            borderColor:"whiteSmoke",
            borderRadius:8
        }}>

      <CardContent>
        <TextField>
          id="filled-search"
          label="Search-field"

        </TextField>
      </CardContent>

      </Card>
    </div>
  );
}

export default App;
