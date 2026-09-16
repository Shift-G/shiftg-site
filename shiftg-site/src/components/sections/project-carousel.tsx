"use client";

import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { Action, Frame } from "@/components/layout/editorial";

const number = (value: number) => String(value).padStart(2, "0");

export function ProjectCarousel({
  children,
  heading,
}: {
  children: ReactNode[];
  heading: ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<number | null>(null);
  const [position, setPosition] = useState({ first: 0, visible: 1, atEnd: false });
  const total = children.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updatePosition() {
      if (!track) return;
      const firstSlide = track.children[0] as HTMLElement | undefined;
      if (!firstSlide) return;
      const step = firstSlide.getBoundingClientRect().width + 1;
      const first = Math.round(track.scrollLeft / step);
      const visible = Math.max(1, Math.floor((track.clientWidth + 2) / step));
      setPosition({
        first,
        visible,
        atEnd: track.scrollLeft >= track.scrollWidth - track.clientWidth - 2,
      });
      if (targetRef.current !== null && Math.abs(track.scrollLeft - targetRef.current) < 2) {
        targetRef.current = null;
      }
    }

    function resetTarget() {
      targetRef.current = null;
    }

    const observer = new ResizeObserver(() => {
      resetTarget();
      updatePosition();
    });
    observer.observe(track);
    track.addEventListener("scroll", updatePosition, { passive: true });
    track.addEventListener("pointerdown", resetTarget, { passive: true });
    track.addEventListener("wheel", resetTarget, { passive: true });
    updatePosition();
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updatePosition);
      track.removeEventListener("pointerdown", resetTarget);
      track.removeEventListener("wheel", resetTarget);
    };
  }, []);

  function move(direction: number) {
    const track = trackRef.current;
    const firstSlide = track?.children[0] as HTMLElement | undefined;
    if (!track || !firstSlide) return;
    const step = firstSlide.getBoundingClientRect().width + 1;
    const current = targetRef.current ?? track.scrollLeft;
    const left = Math.max(
      0,
      Math.min(
        (Math.round(current / step) + direction) * step,
        track.scrollWidth - track.clientWidth,
      ),
    );
    targetRef.current = left;
    track.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  const last = position.atEnd ? total : Math.min(total, position.first + position.visible);

  return (
    <>
      <Frame wide>
        <Flex
          align={{ base: "stretch", lg: "end" }}
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
          gap={8}
          mb={{ base: 8, md: 10 }}
        >
          {heading}
          <Flex align="center" justify="space-between" gap={8} flexShrink={0}>
            <Box>
              <Text fontFamily="mono" fontSize="xs" color="blackAlpha.700" mb={2}>
                PRODUTOS + COLABORAÇÕES
              </Text>
              <Text fontFamily="mono" fontSize="sm" aria-live="polite" aria-atomic="true">
                <Box as="span" color="blue.solid">
                  {number(position.first + 1)}{last > position.first + 1 ? ` — ${number(last)}` : ""}
                </Box>
                <Box as="span" color="blackAlpha.700"> / {number(total)}</Box>
              </Text>
            </Box>
            <Flex gap="1px">
              <IconButton
                aria-label="Projeto anterior"
                aria-controls="home-project-track"
                onClick={() => move(-1)}
                disabled={position.first === 0}
                variant="outline"
                rounded="none"
                w={14}
                h={14}
                color="black"
                borderColor="blackAlpha.300"
                _hover={{ bg: "stone" }}
                _disabled={{ opacity: 0.3, cursor: "not-allowed" }}
                _focusVisible={{ outline: "2px solid", outlineColor: "blue.solid", outlineOffset: "3px" }}
              >
                <ArrowLeft size={22} strokeWidth={1.5} />
              </IconButton>
              <IconButton
                aria-label="Próximo projeto"
                aria-controls="home-project-track"
                onClick={() => move(1)}
                disabled={position.atEnd}
                rounded="none"
                w={14}
                h={14}
                bg="blue.solid"
                color="white"
                _hover={{ bg: "black" }}
                _disabled={{ opacity: 0.3, cursor: "not-allowed" }}
                _focusVisible={{ outline: "2px solid", outlineColor: "blue.solid", outlineOffset: "3px" }}
              >
                <ArrowRight size={22} strokeWidth={1.5} />
              </IconButton>
            </Flex>
          </Flex>
        </Flex>
      </Frame>

      <Box
        ref={trackRef}
        id="home-project-track"
        role="group"
        aria-label="Projetos. Use as setas do teclado ou deslize para explorar."
        aria-roledescription="carrossel"
        tabIndex={0}
        display="grid"
        gridAutoFlow="column"
        gridAutoColumns={{ base: "86%", md: "46%" }}
        gap="1px"
        overflowX="auto"
        overscrollBehaviorX="contain"
        scrollSnapType="x mandatory"
        bg="blackAlpha.200"
        borderY="1px solid"
        borderColor="blackAlpha.200"
        _focusVisible={{ outline: "2px solid", outlineColor: "blue.solid", outlineOffset: "-2px" }}
        css={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          "@media (min-width: 1024px)": {
            gridAutoColumns: "calc((100% - 2px) / 3)",
          },
        }}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {children.map((child, index) => (
          <Box
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${total}`}
            minW={0}
            scrollSnapAlign="start"
            scrollSnapStop="always"
          >
            {child}
          </Box>
        ))}
      </Box>

      <Frame wide>
        <Flex
          align={{ base: "stretch", md: "center" }}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={{ base: 4, md: 10 }}
          pt={{ base: 5, md: 6 }}
        >
          <Flex gap={5} align="center" flex={1} maxW={{ md: "400px" }}>
            <Flex gap="3px" flex={1} aria-hidden="true">
              {children.map((_, index) => (
                <Box
                  key={index}
                  h="2px"
                  flex={1}
                  bg={index >= position.first && index < last ? "blue.solid" : "blackAlpha.300"}
                  transition="background 160ms ease"
                />
              ))}
            </Flex>
            <Text fontFamily="mono" fontSize="xs" color="blackAlpha.700" flexShrink={0}>
              EXPLORE OS {number(total)} PROJETOS
            </Text>
          </Flex>
          <Action secondary href="/ecossistema">
            Ver ecossistema completo
          </Action>
        </Flex>
      </Frame>
    </>
  );
}
