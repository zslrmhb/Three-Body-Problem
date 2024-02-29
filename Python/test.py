# import numpy as np
# import matplotlib.pyplot as plt
# from mpl_toolkits.mplot3d import Axes3D
# from scipy.integrate import solve_ivp
# from matplotlib.animation import FuncAnimation

# # Constants
# G = 6.67430e-11  # Gravitational constant

# mass1 = 5.972e24  # Earth mass
# mass2 = 7.348e22  # Moon mass

# # Initial positions and velocities
# initial_position1 = np.array([0, 0, 0])
# initial_velocity1 = np.array([0.1, 0.1, 0])  # Small initial velocity
# initial_position2 = np.array([38440000, 0, 0])  # Earth-Moon distance
# initial_velocity2 = np.array([0, 1022, 0])  # Approximate orbital velocity of Moonof Moon

# def two_body_equations(t, y):
#     r1 = y[:3]
#     v1 = y[3:6]
#     r2 = y[6:9]
#     v2 = y[9:12]

#     r = np.linalg.norm(r2 - r1)
#     f_gravity = G * mass1 * mass2 / r**2

#     a1 = f_gravity * (r2 - r1) / (r * mass1)
#     a2 = f_gravity * (r1 - r2) / (r * mass2)

#     return np.concatenate((v1, a1, v2, a2))

# # Time span
# t_span = (0, 7 * 24 * 3600)  # Simulating for 7 days
# t_eval = np.linspace(t_span[0], t_span[1], 1000)

# # Initial state vector
# initial_state = np.concatenate((initial_position1, initial_velocity1, initial_position2, initial_velocity2))

# # Solve the differential equations
# solution = solve_ivp(two_body_equations, t_span, initial_state, t_eval=t_eval)

# # Extracting positions, velocities, and accelerations from the solution
# positions1 = solution.y[:3, :]
# velocities1 = solution.y[3:6, :]
# accelerations1 = np.gradient(velocities1, axis=1) / np.gradient(solution.t)
# positions2 = solution.y[6:9, :]
# velocities2 = solution.y[9:12, :]
# accelerations2 = np.gradient(velocities2, axis=1) / np.gradient(solution.t)

# # Setting up the figure and subplots
# fig = plt.figure(figsize=(12, 8))
# ax1 = fig.add_subplot(221, projection='3d')
# ax2 = fig.add_subplot(222)
# ax3 = fig.add_subplot(223)
# ax4 = fig.add_subplot(224)

# # Initializing the 3D trajectory plot
# trajectory1, = ax1.plot([], [], [], 'o-', label='Body 1')
# trajectory2, = ax1.plot([], [], [], 'o-', label='Body 2')
# ax1.set_xlim([-5e8, 5e8])
# ax1.set_ylim([-5e8, 5e8])
# ax1.set_zlim([-5e8, 5e8])
# ax1.set_xlabel('X')
# ax1.set_ylabel('Y')
# ax1.set_zlabel('Z')
# ax1.legend()

# # Initializing velocity and acceleration plots
# velocity_line1, = ax2.plot([], [], label='Velocity Body 1')
# velocity_line2, = ax2.plot([], [], label='Velocity Body 2')
# ax2.set_xlabel('Time')
# ax2.set_ylabel('Velocity Magnitude')
# ax2.legend()

# acceleration_line1, = ax3.plot([], [], label='Acceleration Body 1')
# acceleration_line2, = ax3.plot([], [], label='Acceleration Body 2')
# ax3.set_xlabel('Time')
# ax3.set_ylabel('Acceleration Magnitude')
# ax3.legend()

# # Function to update the plots
# def update(num, positions1, positions2, velocities1, velocities2, accelerations1, accelerations2):
#     # Update 3D trajectory plot

#     # Update 3D trajectory plot
#     trajectory1.set_data([positions1[0, num]], [positions1[1, num]])
#     trajectory1.set_3d_properties([positions1[2, num]])
#     trajectory2.set_data([positions2[0, num]], [positions2[1, num]])
#     trajectory2.set_3d_properties([positions2[2, num]])

#     # Update velocity plot
#     velocity_line1.set_data(solution.t[:num], np.linalg.norm(velocities1[:, :num], axis=0))
#     velocity_line2.set_data(solution.t[:num], np.linalg.norm(velocities2[:, :num], axis=0))
#     ax2.relim()
#     ax2.autoscale_view()

#     # Update acceleration plot
#     acceleration_line1.set_data(solution.t[:num], np.linalg.norm(accelerations1[:, :num], axis=0))
#     acceleration_line2.set_data(solution.t[:num], np.linalg.norm(accelerations2[:, :num], axis=0))
#     ax3.relim()
#     ax3.autoscale_view()

#     return trajectory1, trajectory2, velocity_line1, velocity_line2, acceleration_line1, acceleration_line2

# # Creating the animation
# ani = FuncAnimation(fig, update, frames=len(t_eval), fargs=(positions1, positions2, velocities1, velocities2, accelerations1, accelerations2),
#                     interval=50)

# plt.tight_layout()
# plt.show()

import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from scipy.integrate import solve_ivp
from matplotlib.animation import FuncAnimation

# Constants
G = 6.67430e-11  # Gravitational constant

# Masses of the bodies (in kg)
mass1 = 1.989e30  # Mass of body 1
mass2 = 1.989e30  # Mass of body 2
mass3 = 1.989e30  # Mass of body 3

# Initial positions and velocities
initial_position1 = np.array([10, 0, 0])  # Initial position of body 1
initial_velocity1 = np.array([100, 0, 0])  # Initial velocity of body 1
initial_position2 = np.array([0, 10, 0])  # Initial position of body 2
initial_velocity2 = np.array([100, 10, 0])  # Initial velocity of body 2
initial_position3 = np.array([0, 0, 10])  # Initial position of body 3
initial_velocity3 = np.array([100, 0, 0])  # Initial velocity of body 3

def three_body_equations(t, y):
    r1, v1 = y[:3], y[3:6]
    r2, v2 = y[6:9], y[9:12]
    r3, v3 = y[12:15], y[15:18]

    # Calculate distances
    r12 = np.linalg.norm(r2 - r1)
    r13 = np.linalg.norm(r3 - r1)
    r23 = np.linalg.norm(r3 - r2)

    # Calculate accelerations
    a1 = G * mass2 * (r2 - r1) / r12**3 + G * mass3 * (r3 - r1) / r13**3
    a2 = G * mass1 * (r1 - r2) / r12**3 + G * mass3 * (r3 - r2) / r23**3
    a3 = G * mass1 * (r1 - r3) / r13**3 + G * mass2 * (r2 - r3) / r23**3

    return np.concatenate((v1, a1, v2, a2, v3, a3))

# Time span
t_span = (0, 365 * 24 * 3600)  # Simulating for 1 year
t_eval = np.linspace(t_span[0], t_span[1], 5000)

# Initial state vector
initial_state = np.concatenate((initial_position1, initial_velocity1, initial_position2, initial_velocity2, initial_position3, initial_velocity3))

# Solve the differential equations
solution = solve_ivp(three_body_equations, t_span, initial_state, t_eval=t_eval)

# Extracting positions from the solution
positions1 = solution.y[:3, :]
positions2 = solution.y[6:9, :]
positions3 = solution.y[12:15, :]

# Setting up the figure for the 3D plot
fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')

# Initializing the trajectories for animation
trajectory1, = ax.plot([], [], [], 'o-', label='Body 1')
trajectory2, = ax.plot([], [], [], 'o-', label='Body 2')
trajectory3, = ax.plot([], [], [], 'o-', label='Body 3')
ax.set_xlim([-50, 50])
ax.set_ylim([-50, 50])
ax.set_zlim([-50, 50])
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
ax.legend()

# Animation update function
def update(num, positions1, positions2, positions3, trajectory1, trajectory2, trajectory3):
    trajectory1.set_data(positions1[0, :num], positions1[1, :num])
    trajectory1.set_3d_properties(positions1[2, :num])
    trajectory2.set_data(positions2[0, :num], positions2[1, :num])
    trajectory2.set_3d_properties(positions2[2, :num])
    trajectory3.set_data(positions3[0, :num], positions3[1, :num])
    trajectory3.set_3d_properties(positions3[2, :num])
    return trajectory1, trajectory2, trajectory3

# Creating the animation
ani = FuncAnimation(fig, update, frames=len(t_eval), fargs=(positions1, positions2, positions3, trajectory1, trajectory2, trajectory3),
                    interval=50)

plt.show()
