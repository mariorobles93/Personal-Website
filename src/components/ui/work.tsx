import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props{
  work: any
}

export default function Work({ work}: Props){
  return (
    <Card key={work.company}>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base" key={work.company}>
          <h3 className="inline-flex items-center justify-center gap-x-2 font-semibold leading-none">
            <work.logo className="size-7" />
            <a className="hover:underline" href={work.link} target="_blank">
              {work.company}
            </a>
            <span className="inline-flex gap-x-1">
                        {work.badges.map((badge: string) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
          </h3>
          <div className="text-sm tabular-nums text-gray-100">
            {work.start} - {work.end}
          </div>
        </div>

        <h4 className="font-mono text-sm leading-none">
          {work.title}
        </h4>
      </CardHeader>
      <CardContent className="mt-2 text-sm">
        {work.description}
        <div className="mt-2">
          <ul className="list-disc">
            {work.achievements.map((achievement: string, index: number) => (
              <li key={index} className="mt-1">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
                    <span className="inline-flex gap-x-1">
                        {work.technologies.map((badge: string) => (
                          <Badge
                            variant="outline"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
        </div>
      </CardContent>
    </Card>
  );
}