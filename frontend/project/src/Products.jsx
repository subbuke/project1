import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.webp"
import img4 from "./assets/img4.webp"


export default function Products() {
  return (
    <>
    <Typography
  variant="h3"
  gutterBottom
  sx={{
    fontWeight: 600,
    textAlign: 'center',
    position: 'relative',
    mt: 4,
    '&::after': {
      content: '""',
      display: 'block',
      width: '80px',
      height: '4px',
      backgroundColor: '#1976d2',
      margin: '8px auto 0',
    }
  }}
>
  Products
</Typography>

<div className='products'>
  
 <Grid container spacing={4} justifyContent="center">

  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 345, mx: 'auto' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img1} />
        <CardContent>
          <Typography gutterBottom variant="h5">HK416</Typography>
          <Typography variant="body2" color="text.secondary">
            The Heckler & Koch HK416 is a German-engineered 5.56×45mm NATO assault rifle.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 345, mx: 'auto' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img2} />
        <CardContent>
          <Typography gutterBottom variant="h5">Ak 47</Typography>
          <Typography variant="body2" color="text.secondary">
            The AK-47, officially known as the Avtomat Kalashnikova, is an assault rifle that is
             chambered for the 7.62×39mm cartridge. 
            Developed in the Soviet Union by Russian small-arms designer Mikhail Kalashnikov
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>

</Grid>


   <Grid container spacing={4} justifyContent="center">

  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 345, mx: 'auto' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img3} />
        <CardContent>
          <Typography gutterBottom variant="h5">m4 carbine</Typography>
          <Typography variant="body2" color="text.secondary">
           The M4 carbine is a 5.56mm, gas-operated, shoulder-fired weapon with a 14.5-inch barrel
           and collapsible stock, serving as a lighter, more compact 
            lb lighter, 6 inches shorter alternative to the M16A2.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 345, mx: 'auto' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img4} />
        <CardContent>
          <Typography gutterBottom variant="h5">scar L</Typography>
          <Typography variant="body2" color="text.secondary">
           The FN SCAR is a family of gas-operated short-stroke gas piston
            automatic rifles developed by Belgian manufacturer FN Herstal in 2004.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>

</Grid>
</div>
</>
  );
}
