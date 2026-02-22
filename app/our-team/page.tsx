export const dynamic = "force-static";

import placeHolderImage from "@/components/data/image";
import { getFullImageUrl } from "@/lib/getFullUrl";
import Image from "next/image";

type TeamMember = {
  id: string;
  name: string;
  designation: string;
  about: string;
  image?: string;
  departmentId?: string;
};

type Department = {
  id: string;
  name: string;
  description?: string;
  teams: TeamMember[];
};

async function getDepartments(): Promise<Department[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/department`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch departments");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
}

export default async function TeamPage() {
  const departments = await getDepartments();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-secondary py-42 px-6">
        <div className="absolute inset-0  overflow-hidden object-cover w-full">
          <Image src={placeHolderImage.src} alt="" fill className="w-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-white">Meet Our Team</h1>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-20">
          {departments.map((department) => (
            <div key={department.id} className="space-y-8">
              {/* Department Header */}
              <div>
                <h2 className="text-4xl font-bold text-primary mb-4">
                  {department.name}
                </h2>
                <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-200 to-transparent"></div>
              </div>

              {/* Team Members */}
              <div className="space-y-12">
                {department.teams && department.teams.length > 0 ? (
                  department.teams.map((member) => (
                    <div
                      key={member.id}
                      className="flex flex-col md:flex-row gap-8 items-start"
                    >
                      {/* Member Image */}
                      <div className="flex-shrink-0">
                        {member.image ? (
                          <img
                            src={getFullImageUrl(member.image)}
                            alt={member.name}
                            className="w-80 h-80 object-cover rounded-lg shadow-lg rounded-sm"
                          />
                        ) : (
                          <div className="w-80 h-80 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                            <span className="text-gray-500 text-lg">
                              No Image
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Member Info */}
                      <div className="flex-1 space-y-4">
                        <h3 className="text-3xl font-bold text-primary">
                          {member.name}
                        </h3>
                        <p className="text-xl text-gray-700 font-semibold">
                          {member.designation}
                        </p>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {member.about}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No team members in this department
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Empty State */}
          {departments.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No departments found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
