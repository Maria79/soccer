import getAllTeams from "@/lib/getAllTeams";
import getTeam from "@/lib/getTeam";
import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export default async function TeamPage({ params }) {
  const teamsData = await getAllTeams();
  const teams = teamsData.team;

  const shorName = params.teamId;

  const team = teams.filter((t) => t.basealias === shorName);
  const idTeam = team.map((id) => id.id);
  const escudoUrl = team.map((e) => e.shield_png);

  const data = await getTeam(idTeam);
  const teamData = await data.team.competitions;

  const nationalCompetition = teamData.filter((nt) => nt.id === "1");
  const logo = nationalCompetition[0].logo;

  const color = team[0].color1;

  return (
    <div>
      {/* Team Header */}
      <div
        className="flex flex-col items-center p-10"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="flex items-center text-slate-200 ">
          <h1 className="text-2xl">{team[0].fullName}</h1>
          <AiOutlineStar className="text-2l" />
        </div>
        <div className="flex items-center gap-x-2 text-slate-200">
          <div className="">
            <Image
              className="rounded-full"
              src={logo}
              alt={nationalCompetition[0].name}
              title={nationalCompetition[0].name}
              width={36}
              height={36}
            />
          </div>
          <div>
            <Image src={escudoUrl[0]} alt="" width={100} height={100} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
