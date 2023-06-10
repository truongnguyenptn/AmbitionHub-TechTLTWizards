import { SDK, useGumContext, useProfile } from "@gumhq/react-sdk";
import { Profile } from "@gumhq/ui-components";
import { PublicKey } from "@solana/web3.js";

export function MyProfile() {
  const { sdk } = useGumContext();
  const { profile } = useProfile(
    sdk,
    new PublicKey("HbaeYzrgBnM8gPshvNgd2xH7mV5fpBnAo3Gqwr1xfjD2")
  );

  const profileData = {
    ...profile?.metadata,
    following: profile?.following || 0,
    followers: profile?.followers || 0,
    connect: {
      following: false,
      follow: () => {
        alert("follow");
      },
      unfollow: () => {
        alert("unfollow");
      },
    },
  };

  return (
    <div>
      <Profile data={profileData} />
      <button>Invest</button>
    </div>
  );
}
