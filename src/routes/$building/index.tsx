import { createFileRoute, Outlet, useParams } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import getBuildingData from '@/api/getBuildingData';

export const Route = createFileRoute('/$building/')({
  component: RouteComponent,
})

function RouteComponent() {

}
