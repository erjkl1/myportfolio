import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type SkillCardProps = {
  title: string;
  body: string;
  icon: string;
};

export default function SkillCard({ title, body, icon }: SkillCardProps) {
  return (
    <Card sx={{ minWidth: 200, backgroundColor: "white", color: "black" }}>
      <CardContent sx={{ borderColor: "black" }}>
        <Typography variant="h5" component="div">
          <div className="flex justify-center">
            <img src={icon} className="w-20" alt="work" />
          </div>
          {title}
        </Typography>
        <hr className="border-gray-500 my-1" />
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
