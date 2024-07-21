import ContactComponent from "@/app/homeUi/contactComponent";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <div className="about-container shadow-md w-3/4">
                <div className="about-text">
                    <Typography className="text-xl font-belleza self-center font-medium">About Revived Relics</Typography>
                    <br />

                    <Image className="profile-photo" src="/profilephoto.jpg" alt="Profile Photo" width={500} height={500} />

                    <Typography className="font-belleza" paragraph>
                        Anne-Marie, a graduate of the prestigious School of the Art Institute of Chicago, holds a Bachelor of Fine Arts degree with a specialization in ceramics and fiber arts. With a dedication spanning eight years, she has immersed herself in the world of pottery, molding clay with a deft touch and an intuitive understanding of form and function. Her hands bear the marks of countless hours spent shaping, refining, and bringing to life vessels that marry utility with aesthetic appeal.
                    </Typography>
                    <Typography className="font-belleza" paragraph>
                        In addition to her ceramic work, Anne-Marie has delved into the intricate art of stained glass, dedicating three years to exploring the interplay of light and color. Each piece is a testament to her reverence for tradition, coupled with a desire to push the boundaries of the medium, resulting in creations that are at once timeless and contemporary.
                    </Typography>
                    <Typography className="font-belleza" paragraph>
                        Parallel to her personal body of work, Anne-Marie has been repairing cherished items for two years now. She quickly discovered she had a knack for it, and was equally surprised to find how much she loved the work.
                    </Typography>
                    <Typography className="font-belleza" paragraph>
                        Anne-Marie, an artist who thrives on the tactile, the tangible, and the transformative power of creation, is a testament to the endless possibilities that emerge when passion and skill merge. Yet, for her, artistry extends far beyond the confines of any specific medium; identifying first and foremost as a maker, she finds inspiration in the act of creation itself.
                    </Typography>
                    <Typography className="font-belleza" paragraph>
                        When not engaged in the meticulous work of repair and restoration, you can often find Anne-Marie tinkering around the house or working in her garden. Her dedication to craftsmanship extends beyond the workshop, permeating every aspect of her life.
                    </Typography>
                    <Typography className="font-belleza" paragraph>
                        At Revived Relics, each project is not just a repair job; it&apos;s a labor of love, a testament to the enduring value of craftsmanship, and a celebration of the timeless beauty of the past. Trust Anne-Marie to breathe new life into the things you love, ensuring they continue to tell their stories for generations to come.
                    </Typography>
                </div>
            </div>
            <br />
            <div>
                <ContactComponent />
            </div>
        </>
    );
}
