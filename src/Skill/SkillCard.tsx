import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import { Button } from '@mui/material';

type SkillCard = {
	title: string;
	body: string;
	icon: string;
	link: string;
};

export default function SkillCard({ title, body, icon, link }: SkillCard) {
  return (
	  <Card sx={{ minWidth: 200, backgroundColor: "white", color: "black" }}>
		  <CardContent sx={{ borderColor: "black" }}>
			  <Typography variant="h5" component="div">
				  <div className="flex justify-center">
					  <img src={icon} className="w-20" />
				  </div>
				  {title}
			  </Typography>
			  <hr className="border-gray-500 my-1" />
			  <Typography variant="body2">{body}</Typography>
		  </CardContent>

		  {link != undefined && (
			  <CardActions >
				  <Button
					  component="a" // ここでaタグを指定
					  href={`${link}`}
					  target="_blank"
					  rel="noopener noreferrer"
					  color="primary"
				  >
					  外部リンク
				  </Button>
			  </CardActions>
		  )}
	  </Card>
  );
}
