export const ProfilePic = ({ src }: { src: string }) => {
  return (
    <div className="pile group">
      <div className="scale-0 animate-[grow_0.8s_ease_0s_forwards] mix-blend-luminosity drop-shadow-2xl">
        <Picture src={src} />
      </div>
      <Picture className="opacity-0 transition-opacity duration-1000 hover:opacity-100" src={src} />
    </div>
  );
};

const Picture = ({ className, src }: { className?: string; src: string }) => {
  return (
    <img
      alt="avatar"
      className={`${className} mask mask-squircle h-[128px] w-[128px] object-cover object-top sm:h-[128px] sm:w-[128px]`}
      height="128"
      src={src}
      width="128"
    />
  );
};
